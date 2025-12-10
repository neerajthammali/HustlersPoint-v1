"use client"

import { useState, useEffect } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useUser } from "@/firebase"
import Link from "next/link"

type Comment = {
  author: string
  text: string
  timestamp: string
  avatar: string | null
  authorId: string
}

export function CommentSection({ articleId }: { articleId: string }) {
  const { user } = useUser()
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState("")
  const { toast } = useToast()
  const storageKey = `comments-${articleId}`

  useEffect(() => {
    try {
        const storedComments = localStorage.getItem(storageKey)
        if (storedComments) {
            setComments(JSON.parse(storedComments))
        }
    } catch (error) {
        console.error("Failed to parse comments from localStorage", error)
    }
  }, [storageKey])

  const handleAddComment = () => {
    if (!user) {
        toast({
            variant: "destructive",
            title: "Not Logged In",
            description: "You must be logged in to post a comment.",
        })
        return;
    }
    if (newComment.trim() === "") {
      toast({
        variant: "destructive",
        title: "Empty Comment",
        description: "You can't submit an empty comment.",
      })
      return
    }

    const comment: Comment = {
      author: user.displayName || "Anonymous",
      text: newComment,
      timestamp: new Date().toISOString(),
      avatar: user.photoURL,
      authorId: user.uid,
    }

    try {
        const updatedComments = [...comments, comment]
        setComments(updatedComments)
        localStorage.setItem(storageKey, JSON.stringify(updatedComments))
        setNewComment("")
        toast({
        title: "Comment Added",
        description: "Your comment has been posted.",
        })
    } catch (error) {
        console.error("Failed to save comment to localStorage", error)
        toast({
            variant: "destructive",
            title: "Error",
            description: "Failed to save your comment.",
        })
    }
  }

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Comments ({comments.length})</h2>
      <div className="space-y-6">
        {comments.map((comment, index) => (
          <div key={index} className="flex items-start space-x-4">
            <Avatar>
              <AvatarImage src={comment.avatar || undefined} alt={comment.author} />
              <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-baseline space-x-2">
                <p className="font-semibold">{comment.author}</p>
                <p className="text-xs text-muted-foreground">
                  {new Date(comment.timestamp).toLocaleDateString()}
                </p>
              </div>
              <p className="mt-1 text-muted-foreground">{comment.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Leave a Comment</h3>
        {user ? (
          <div className="grid gap-4">
            <Textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write your comment here..."
              className="min-h-[120px]"
            />
            <Button onClick={handleAddComment} className="justify-self-end">
              Post Comment
            </Button>
          </div>
        ) : (
            <div className="text-center p-8 border rounded-lg">
                <p className="text-muted-foreground">You must be logged in to leave a comment.</p>
                <Button asChild className="mt-4">
                    <Link href="/login">Login to Comment</Link>
                </Button>
            </div>
        )}
      </div>
    </div>
  )
}
