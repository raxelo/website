import { routes } from "vue-router/auto-routes";

export interface BlogPost {
	path: string;
	title: string;
	description?: string;
	publishedDate: string;
	thumbnail?: string;
	tags?: string[];
	draft?: boolean;
	slug: string;
}

// Recursive function to flatten nested routes and collect all routes with meta
function collectRoutesWithMeta(routes: any[], parentPath = ""): any[] {
	const collected: any[] = [];

	for (const route of routes) {
		const currentPath = parentPath + (route.path || "");

		// If this route has meta and a name, include it
		if (route.name && route.meta) {
			collected.push({
				...route,
				fullPath: currentPath,
			});
		}

		// Recursively process children
		if (route.children && route.children.length > 0) {
			const childPath = currentPath === "" ? "" : currentPath + "/";
			collected.push(...collectRoutesWithMeta(route.children, childPath));
		}
	}

	return collected;
}

export function getBlogPosts(): BlogPost[] {
	const allRoutes = collectRoutesWithMeta(routes);

	return allRoutes
		.filter((route) => {
			// Filter for blog post routes that have the required meta
			return (
				(route.name &&
					route.name.includes("/blog/") &&
					route.meta?.title &&
					route.meta?.publishedDate &&
					!route.name.includes("components") && // Exclude component routes
					!route.name.includes("index")) ||
				route.name === "/blog/(posts)/"
			); // Handle index routes properly
		})
		.map((route) => {
			// Extract slug from route name
			const nameParts = route.name.split("/").filter(Boolean);
			const slug =
				nameParts.find((part) => part !== "blog" && part !== "(posts)") ||
				nameParts[nameParts.length - 1];

			// Construct the proper path
			const pathParts = route.name
				.split("/")
				.filter((part) => part && part !== "(posts)");
			const cleanPath = "/" + pathParts.join("/").replace(/\/$/, "");

			return {
				path: cleanPath,
				title: route.meta.title,
				description: route.meta.description,
				publishedDate: route.meta.publishedDate,
				thumbnail: route.meta.thumbnail,
				tags: route.meta.tags || [],
				draft: route.meta.draft || false,
				slug: slug,
				author: route.meta.author,
				readingTime: route.meta.readingTime,
			};
		})
		.filter((post) => !post.draft) // Filter out drafts in production
		.sort(
			(a, b) =>
				new Date(b.publishedDate).getTime() -
				new Date(a.publishedDate).getTime(),
		);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
	return getBlogPosts().find((post) => post.slug === slug);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
	return getBlogPosts().filter((post) => post.tags?.includes(tag));
}

// Debug helper
export function debugBlogRoutes() {
	const allRoutes = collectRoutesWithMeta(routes);
	console.log("All routes with meta:", allRoutes);
	console.log(
		"Filtered blog routes:",
		allRoutes.filter(
			(route) => route.name?.includes("/blog/") && route.meta?.title,
		),
	);
	console.log("Final blog posts:", getBlogPosts());
}
