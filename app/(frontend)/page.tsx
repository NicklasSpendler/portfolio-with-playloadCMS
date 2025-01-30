import {Separator} from "@/components/ui/separator";
import {getAboutMe} from "@/lib/queries";
import {RichText} from "@payloadcms/richtext-lexical/react";
import {SerializedEditorState} from "@payloadcms/richtext-lexical/lexical";

export default async function Home() {
  
  const {profileText} = await getAboutMe();
  const profileTextData: SerializedEditorState = profileText;
  
  return (
  <>
    <main className="wrapper front-page h-[80vh] flex justify-center items-center flex-col">
      <img className={"h-[40%] rounded-3xl rounded-b-none"} src="/api/media/file/billede%20af%20mig.jpg" alt={"intro image"}/>
      <div className={"profile-text project-text min-w-96 max-w-96 p-2 rounded"}>
        <h2 className={"pt-2 text-3xl text-center text-neonpink"}>About Me</h2>
        <Separator />
        <RichText className={"text-center"} data={profileTextData}/>
      </div>
    </main>
  </>
  );
}
