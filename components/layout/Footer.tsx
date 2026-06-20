export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <span>© {new Date().getFullYear()} AutopilotHub. All rights reserved.</span>
        <span>Physical AI for off-road autopilot</span>
      </div>
    </footer>
  );
}
