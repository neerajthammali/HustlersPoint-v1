
"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useFirestore, useUser, useCollection } from "@/firebase"
import { collection, addDoc, serverTimestamp, Timestamp } from "firebase/firestore"
import { Input } from "../ui/input"

type Comment = {
  id?: string
  author: string
  text: string
  timestamp: Timestamp
  avatar: string | null
  authorId: string | 'anonymous'
}

export function CommentSection({ articleId }: { articleId:string }) {
  const { user } = useUser()
  const db = useFirestore()
  const [newComment, setNewComment] = useState("")
  const [anonymousName, setAnonymousName] = useState("")
  const { toast } = useToast()
  
  const commentsPath = `articles/${articleId}/comments`;
  const { data: comments, loading } = useCollection<Comment>(commentsPath, { orderBy: ["timestamp", "asc"] });

  const handleAddComment = async () => {
    if (newComment.trim() === "") {
      toast({
        variant: "destructive",
        title: "Empty Comment",
        description: "You can't submit an empty comment.",
      })
      return
    }

    if (!user && anonymousName.trim() === "") {
        toast({
            variant: "destructive",
            title: "Name Required",
            description: "Please enter your name to post a comment.",
        })
        return
    }
    
    if (!db) {
        toast({ variant: "destructive", title: "Error", description: "Database not available." })
        return
    }

    const commentData = {
      author: user?.displayName || anonymousName,
      text: newComment,
      timestamp: serverTimestamp(),
      avatar: user?.photoURL || null,
      authorId: user?.uid || 'anonymous',
    }

    try {
      const collectionRef = collection(db, commentsPath);
      await addDoc(collectionRef, commentData);
      setNewComment("")
      setAnonymousName("")
      toast({
        title: "Comment Added",
        description: "Your comment has been posted.",
      })
    } catch (error) {
      console.error("Error adding comment to firestore", error)
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
        {loading && <p>Loading comments...</p>}
        {!loading && comments.map((comment) => (
          <div key={comment.id} className="flex items-start space-x-4">
            <Avatar>
              <AvatarImage src={comment.avatar || undefined} alt={comment.author} />
              <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-baseline space-x-2">
                <p className="font-semibold">{comment.author}</p>
                <p className="text-xs text-muted-foreground">
                  {comment.timestamp ? new Date(comment.timestamp.toDate()).toLocaleDateString() : 'Just now'}
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
            {!user && (
                 <div className="space-y-2">
                    <Input 
                        value={anonymousName}
                        onChange={(e) => setAnonymousName(e.target.value)}
                        placeholder="Your Name"
                    />
                </div>
            )}
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
