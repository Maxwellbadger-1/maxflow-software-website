import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container section flex flex-col items-center justify-center text-center min-h-[60vh]">
      <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-4">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Seite nicht gefunden
      </h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        Die von Ihnen gesuchte Seite existiert leider nicht. Vielleicht haben Sie
        sich vertippt oder die Seite wurde verschoben.
      </p>
      <Link href="/">
        <Button size="lg">
          Zurück zur Startseite
        </Button>
      </Link>
    </div>
  );
}
