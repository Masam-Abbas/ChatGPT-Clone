import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8 " />
            <h2 className="">Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">&quot;Explain something to me&quot;</p>
            <p className="infoText">
              &quot;What is difference between a cat and a dog?&quot;
            </p>
            <p className="infoText">&quot;What is color of sun?&quot;</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8 " />
            <h2 className="">Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              &quot;Change the ChatGPT model to use&quot;
            </p>
            <p className="infoText">
              &quot;Messages are stored in firebase&quot;
            </p>
            <p className="infoText">
              &quot;Hot Toast notifications when ChatGPT is thinking!&quot;
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8 " />
            <h2 className="">Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              &quot;May occasionally generate incorrect information&quot;
            </p>
            <p className="infoText">
              &quot;May occasionally produce harmful instructions or biased
              content&quot;
            </p>
            <p className="infoText">
              &quot;Limited knowledge of world and events after 2021&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
