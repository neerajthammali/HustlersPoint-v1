"use client"

import { useState, useEffect } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Comment = {
  author: string
  text: string
  timestamp: string
  avatar: string
}

export function CommentSection({ articleId }: { articleId: string }) {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState("")
  const { toast } = useToast()
  const storageKey = `comments-${articleId}`

  useEffect(() => {
    const storedComments = localStorage.getItem(storageKey)
    if (storedComments) {
      setComments(JSON.parse(storedComments))
    }
  }, [storageKey])

  const handleAddComment = () => {
    if (newComment.trim() === "") {
      toast({
        variant: "destructive",
        title: "Empty Comment",
        description: "You can't submit an empty comment.",
      })
      return
    }

    const comment: Comment = {
      author: "Guest", // In a real app, this would be the logged-in user
      text: newComment,
      timestamp: new Date().toISOString(),
      avatar: `https://i.pravatar.cc/40?u=${Date.now()}`,
    }

    const updatedComments = [...comments, comment]
    setComments(updatedComments)
    localStorage.setItem(storageKey, JSON.stringify(updatedComments))
    setNewComment("")
    toast({
      title: "Comment Added",
      description: "Your comment has been posted.",
    })
  }

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Comments ({comments.length})</h2>
      <div className="space-y-6">
        {comments.map((comment, index) => (
          <div key={index} className="flex items-start space-x-4">
            <Avatar>
              <AvatarImage src={comment.avatar} alt={comment.author} />
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
      </div>
    </div>
  )
}
