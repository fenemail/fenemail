import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Lorem Ipsum</h1>
      <h1 className="text-3xl font-bold text-muted-foreground">Lorem Ipsum</h1>
      <Input />
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}
