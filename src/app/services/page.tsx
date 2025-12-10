import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { serviceProfiles } from '@/lib/placeholder-data';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Services Showcase</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Connect with talented freelancers, engineers, and SaaS builders ready to help you grow.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {serviceProfiles.concat(serviceProfiles).concat(serviceProfiles).map((profile, index) => (
          <Card key={`${profile.id}-${index}`} className="text-center transition-shadow duration-300 hover:shadow-xl">
            <CardContent className="p-6">
              <Image
                src={profile.imageUrl.replace(/seed\/\w+/, `seed/servicepage${index}`)}
                alt={profile.name}
                width={128}
                height={128}
                className="mx-auto h-32 w-32 rounded-full object-cover"
                data-ai-hint={profile.imageHint}
              />

              <h3 className="font-headline mt-4 text-xl font-semibold">{profile.name}</h3>
              <p className="text-sm text-primary">{profile.role}</p>
              <p className="mt-2 text-sm text-muted-foreground">{profile.description}</p>
              <Button asChild variant="outline" className="mt-6">
                <Link href="#">View Profile</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
