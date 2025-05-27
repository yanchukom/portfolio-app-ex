import { Code, Paintbrush, Users } from "lucide-react";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 border-b border-orange-500 pb-2 inline-block">
        ABOUT ME
      </h1>

      <div className="mb-10">
        <p className="text-lg">
          Hello there! I'm thrilled to welcome you to my portfolio. I am a
          passionate and versatile full-stack developer with a keen interest in
          exploring the latest cutting-edge technologies. My journey in the
          world of web development has been nothing short of exhilarating, and I
          constantly strive to enhance my skills and embrace emerging trends in
          the industry.
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-6">What I do!</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-orange-50 dark:bg-orange-950/20 p-6 rounded-lg">
          <div className="text-orange-500 mb-4">
            <Code className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">Web Development</h3>
          <p>
            As a developer, I find myself most captivated by the power and
            flexibility of NEXT.js. I'm always eager to dive into new projects
            that leverage NEXT.js and discover innovative ways to create fast,
            scalable, and user-friendly applications.
          </p>
        </div>

        <div className="bg-orange-50 dark:bg-orange-950/20 p-6 rounded-lg">
          <div className="text-orange-500 mb-4">
            <Paintbrush className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">App Development</h3>
          <p>
            With a focus on user-centric design and cutting-edge technologies, I
            thrive on building intuitive and efficient apps that make a positive
            impact on people's lives. Let's turn ideas into reality and shape
            the future together.
          </p>
        </div>

        <div className="bg-orange-50 dark:bg-orange-950/20 p-6 rounded-lg">
          <div className="text-orange-500 mb-4">
            <Paintbrush className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">UI/UX Designing</h3>
          <p>
            Crafting visually appealing and intuitive user interfaces that offer
            a delightful user experience is something I'm truly fanatic about.
          </p>
        </div>

        <div className="bg-orange-50 dark:bg-orange-950/20 p-6 rounded-lg">
          <div className="text-orange-500 mb-4">
            <Users className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">Mentorship</h3>
          <p>
            I have also found great joy in sharing my knowledge with others.
            Being a technical mentor allows me to give back to the community
            that has supported me throughout my career.
          </p>
        </div>
      </div>
    </div>
  );
}
