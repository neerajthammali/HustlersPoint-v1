"use client"

import { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

const pollOptions = [
  { id: "ai-trends", label: "Deep Dive into AI Trends" },
  { id: "founder-interviews", label: "Interviews with Successful Founders" },
  { id: "marketing-playbooks", label: "Growth Marketing Playbooks" },
  { id: "no-code-tools", label: "The Best No-Code Tools" },
]

const POLL_STORAGE_KEY = "hustler-point-poll-vote"

export function BlogIdeasPoll() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [hasVoted, setHasVoted] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const previousVote = localStorage.getItem(POLL_STORAGE_KEY)
    if (previousVote) {
      setHasVoted(true)
      setSelectedOption(previousVote)
    }
  }, [])

  const handleVote = () => {
    if (selectedOption && !hasVoted) {
      localStorage.setItem(POLL_STORAGE_KEY, selectedOption)
      setHasVoted(true)
      toast({
        title: "Vote Submitted!",
        description: "Thanks for your feedback. We'll get writing!",
      })
    } else if (hasVoted) {
      toast({
        variant: "destructive",
        title: "Already Voted",
        description: "You can only vote once.",
      })
    } else {
        toast({
            variant: "destructive",
            title: "No Selection",
            description: "Please select an option to vote.",
        })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>What should we write about next?</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedOption ?? undefined}
          onValueChange={setSelectedOption}
          disabled={hasVoted}
        >
          <div className="space-y-2">
            {pollOptions.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <RadioGroupItem value={option.id} id={option.id} />
                <Label htmlFor={option.id}>{option.label}</Label>
              </div>
            ))}
          </div>
        </RadioGroup>
        <Button onClick={handleVote} disabled={hasVoted} className="mt-4 w-full">
          {hasVoted ? "Thanks for voting!" : "Submit Vote"}
        </Button>
      </CardContent>
    </Card>
  )
}
