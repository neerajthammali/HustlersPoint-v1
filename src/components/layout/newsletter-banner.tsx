"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"

export function NewsletterBanner() {
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      console.log("Subscribed with:", email)
      toast({
        title: "You're subscribed!",
        description: "Thanks for joining our newsletter.",
      })
      setEmail("")
    } else {
      toast({
        variant: "destructive",
        title: "Invalid Email",
        description: "Please enter a valid email address.",
      })
    }
  }

  return (
    <Card className="overflow-hidden bg-primary text-primary-foreground">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="p-6 md:p-8">
            <h2 className="text-3xl font-bold">Subscribe to Our Newsletter</h2>
            <p className="mt-2 opacity-80">
              Get the latest insights, stories, and news delivered to your inbox.
            </p>
          </div>
          <div className="p-6 md:p-8 bg-background/10 flex items-center justify-center h-full">
            <form
                onSubmit={handleSubmit}
                className="flex w-full max-w-md items-center space-x-2"
            >
                <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 border-primary-foreground/20 focus:ring-primary-foreground"
                />
                <Button type="submit" variant="secondary">
                Subscribe
                </Button>
            </form>
          </div>
        </div>
    </Card>
  )
}
