import Link from "next/link"
import { blogPosts } from "@/lib/placeholder-data"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function PopularPosts() {
  const popular = [...blogPosts].reverse()
  return (
    <Card>
      <CardHeader>
        <CardTitle>Popular Posts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {popular.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="block hover:bg-muted/50 p-2 rounded-md transition-colors"
            >
              <h4 className="font-semibold">{post.title}</h4>
              <p className="text-sm text-muted-foreground">
                {post.author} • {post.date}
              </p>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
