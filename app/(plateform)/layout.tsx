import { ClerkProvider, UserButton } from "@clerk/nextjs";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ClerkProvider>{children}</ClerkProvider>
    </div>
  );
};
export default PlatformLayout;
