import ProjectSection from "./ProjectSection";
import queueImg from "@/assets/queue-thumbnail.jpg";

import eragatewayImg from "@/assets/Eragateway-img.png";
import freelanceImg from "@/assets/upwork-img.png";
import fallibleImg from "@/assets/fallible-img.png";
import rbacImg from "@/assets/rbac-img.png";
import devopsImg from "@/assets/devops-img.png";
import p5jsImg from "@/assets/p5jsImg.png";
import serverlessImg from "@/assets/serverlessImg.png";
import inventoryImg from "@/assets/inventoryimg.png";
import springImg from "@/assets/springImg.png";
import projImg from "@/assets/projImg.png";
import beyondbordersImg from "@/assets/beyondbordersImg.png";
import certImg from "@/assets/Certificates.png";
import beyondcodetImg from "@/assets/beyondcode.png";

const ExperienceAndProjects = () => {
  return (
    <div>
      {/* Experience Section */}
      <div className="mb-16">
        <div className="space-y-12">
          <ProjectSection
            id="eragetway-intern"
            title="Full Stack Programming Intern"
            subtitle="Eragetway · Sandton"
            year="Aug 2025 – Present"
            collaborators={[]}
            paragraphs={[
              "Learned TypeScript/PHP/MySQL quickly to help with critical launches.",
              "Built and fixed 6+ production apps based on user feedback.",
              "Reviewed code and worked with others to solve problems.",
            ]}
            images={[eragatewayImg]}
            links={[]}
          />

          <ProjectSection
            id="fallible-developer"
            title="Software Developer & UI/UX Designer"
            subtitle="Fallible · Remote"
            year="May 2023 – July 2025"
            collaborators={[]}
            paragraphs={[
              "Made designs in Figma and turned them into code.",
              "Built iOS interfaces that matched Apple's guidelines.",
              "Created web apps with React/Next.js that clients kept using.",
            ]}
            images={[fallibleImg]}
            links={[]}
          />

          <ProjectSection
            id="freelance-engineer"
            title="Freelance Software Engineer"
            subtitle="Gauteng"
            year="Jan 2022 – Present"
            collaborators={[]}
            paragraphs={[
              "Made wireframes and prototypes that reduced development time.",
              "Talked to users to understand their problems.",
              "Worked with 8+ brands who kept coming back for more.",
            ]}
            images={[freelanceImg]}
            links={[]}
          />
        </div>
      </div>

      {/* Projects Section */}
      <div className="mb-16">
        <div className="space-y-12">
          <ProjectSection
            id="beyond-borders-tutoring"
            title="Beyond Borders Tutoring Platform"
            subtitle="Freelance Project"
            year="2025"
            collaborators={[]}
            paragraphs={[
              "Built a complete tutoring platform with React and Tailwind.",
              "Connected WhatsApp chat for booking sessions with mentors.",
              "Iterated the website based on ongoing client feedback.",
            ]}
            images={[beyondbordersImg]}
            links={[
              { label: "View live site", url: "#", external: true },
            ]}
          />
          
          <ProjectSection
            id="saas-rbac"
            title="SaaS RBAC Prototype"
            subtitle="Personal Project"
            year="December 2025"
            collaborators={[]}
            paragraphs={[
              "Learned how to connect a Bun server to PostgreSQL. Figured out where to put permission checks in the request flow. Made database tables talk to each other with foreign keys.",
            ]}
            images={[rbacImg]}
            links={[
              { label: "View on GitHub", url: "https://github.com/KamoEllen/rbac-prototype", external: true },
            ]}
          />

          <ProjectSection
            id="opentelemetry-devops"
            title="OpenTelemetry DevOps Simulation"
            subtitle="Personal Project"
            year="July 2025"
            collaborators={[]}
            paragraphs={[
              "Made Terraform talk to AWS to create resources. Learned where Prometheus gets metrics from. Connected GitHub Actions to deploy to Kubernetes.",
            ]}
            images={[devopsImg]}
            links={[
              { label: "View on GitHub", url: "https://github.com/KamoEllen/Ecommerce-Devops-Pipeline", external: true },
            ]}
          />
          
          <ProjectSection
            id="algorithm-visualization"
            title="Algorithm Visualization Suite"
            subtitle="Personal Project"
            year="January 2025"
            collaborators={[]}
            paragraphs={[
              "Made p5.js draw boxes that move. Learned where to put the 'next step' button logic. Showed numbers changing in real time as algorithms run.",
            ]}
            images={[p5jsImg]}
            links={[
              { label: "Try it live", url: "https://github.com/KamoEllen/P5Js-Challenge", external: false },
            ]}
          />
          
          <ProjectSection
            id="serverless-commerce"
            title="Serverless Commerce API"
            subtitle="AWS Hackathon"
            year="July 2025"
            collaborators={[]}
            paragraphs={[
              "Made Lambda run C# code. Learned where DynamoDB stores data. Connected API Gateway to pass requests to Lambda.",
            ]}
            images={[serverlessImg]}
            links={[]}
          />

          <ProjectSection
            id="inventory-lens"
            title="InventoryLens: AI Model Deployment"
            subtitle="Personal Project"
            year="July 2025"
            collaborators={[]}
            paragraphs={[
              "Put Python code in Docker containers. Learned where the AI model file gets loaded from. Made an endpoint return boxes around objects in images.",
            ]}
            images={[inventoryImg]}
            links={[
              { label: "View on GitHub", url: "https://github.com/KamoEllen/InventoryLens-Demo", external: true },
            ]}
          />

          <ProjectSection
            id="environmental-api"
            title="Environmental Data Management API"
            subtitle="Personal Project"
            year="June 2025"
            collaborators={[]}
            paragraphs={[
              "Made Spring Boot save data to a database. Learned where to put the 'get all sensors' code. Made Swagger show all the endpoints automatically.",
            ]}
            images={[springImg]}
            links={[
              { label: "View on GitHub", url: "https://github.com/KamoEllen/SpringBoot-EcoManagement", external: true },
            ]}
          />

          <ProjectSection
            id="project-management-api"
            title="Project Management API"
            subtitle="Personal Project"
            year="August 2024"
            collaborators={[]}
            paragraphs={[
              "Made FastAPI check JWT tokens. Learned where MongoDB keeps documents. Split code into different files that talk to each other.",
            ]}
            images={[projImg]}
            links={[
              { label: "View on GitHub", url: "https://github.com/KamoEllen/project-management-api-v2", external: true },
            ]}
          />
        </div>
      </div>

      {/* Certificates Section */}
      <div className="mb-16">
        <ProjectSection
          id="certificates"
          title="Certificates"
          year="2022-2025"
          collaborators={[]}
          paragraphs={[
            `19 certifications across 3 years looks like a lot until you realize they're just receipts. Receipts for evenings, weekends, and "one more hour" until something clicked. UX. Frontend. Backend. Cloud. Each one started the same way: "I don't know this yet." Each one ended the same way: "Now I do." That's all they are—the most honest record I have of how I actually spend my time. Next one will be whatever I don't know yet. (Currently: AWS.)`,
          ]}
          images={[certImg]}
        />
      </div>

      {/* Skills Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Skills</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Backend</h3>
            <p className="text-gray-700">Java, Python, C#, C++, Spring Boot, FastAPI, .NET, PostgreSQL, MongoDB</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Cloud & DevOps</h3>
            <p className="text-gray-700">AWS (EKS, Lambda, Terraform), Docker, Kubernetes, GitHub Actions, CI/CD, Observability</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Frontend</h3>
            <p className="text-gray-700">React, Next.js, TypeScript, JavaScript, HTML/CSS</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Design</h3>
            <p className="text-gray-700">Figma, Wireframing, Prototyping, Apple HIG, Design Systems, User Research</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Methods</h3>
            <p className="text-gray-700">Algorithms & Data Structures, System Design, API Development, Competitive Programming, Agile/Scrum</p>
          </div>
        </div>
      </div>

      {/* Currently Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Currently</h2>
        <ul className="list-disc pl-5 space-y-3">
          <li>Building distributed systems and cloud infrastructure projects.</li>
          <li>Solving the CSES Problem Set to deepen algorithmic mastery.</li>
          <li>Preparing for AWS certifications.</li>
          <li>Researching system design patterns and high-performance architectures.</li>
        </ul>
      </div>

      {/* Beyond Code Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Beyond Code</h2>
        <ProjectSection
            
            collaborators={[]}
            paragraphs={[
              "Math · Dancing · Reading · Hiking · Puzzles · Sports",
            ]}
            images={[beyondcodetImg]}
            links={[]}
          />
        
      </div>
    </div>
  );
};

export default ExperienceAndProjects;
