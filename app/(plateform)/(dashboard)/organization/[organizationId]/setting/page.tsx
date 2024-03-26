import { OrganizationProfile } from "@clerk/nextjs";

const SettingPage = () => {
  return (
    <div className="w-full">
      <OrganizationProfile
        appearance={{
          elements: {
            rootBox: {
              boxShadow: "none",
              width: "100%",
            },
            card: {
              width: "100%",
              boxShadow: "none",
              border: "1px solid black",
            },
          },
        }}
      />
    </div>
  );
};

export default SettingPage;
