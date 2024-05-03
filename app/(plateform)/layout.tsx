import { ClerkProvider, UserButton } from "@clerk/nextjs";
import { Toaster } from "sonner";
const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ClerkProvider>
        <Toaster />
        {children}
      </ClerkProvider>
    </div>
  );
};
export default PlatformLayout;
