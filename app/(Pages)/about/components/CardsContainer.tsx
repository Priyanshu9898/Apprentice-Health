import React from "react";
import Card from "./UserCard";

const CardsContainer: React.FC = () => {
  const cardsData: {
    imageSrc: string;
    name: string;
    role: string;
    bio: string;
    position: "left" | "right";
  }[] = [
    {
      imageSrc: "/assets/images/about/rajiv.jpg",
      name: "Rajiv Sivendran, MD, MBA",
      role: "Co-Founder & Chief Executive Officer",
      bio: "Rajiv is excited to be driving the transformation of health care through AI and point-of-care analytics. He holds a BA from the University of Pennsylvania, an MD from Duke University School of Medicine, and an MBA from Harvard Business School. Rajiv trained in Internal Medicine at Brigham and Women's Hospital, where he served as an attending physician for three years.",
      position: "left",
    },
    {
      imageSrc: "/assets/images/arthur.jpg",
      name: "Artur Menzeleev, PhD",
      role: "Co-Founder & Chief Science Officer",
      bio: "Artur is thrilled to leverage emerging technologies in AI and the Internet of Things to transform healthcare analytics. He holds a PhD from the California Institute of Technology and a BA from the University of Pennsylvania. Prior to launching Apprentice Health, Artur was a practicing data scientist focusing on business intelligence, healthcare analytics, and IoT.",
      position: "right",
    },
    {
      imageSrc: "/assets/images/connie.jpg",
      name: "Connie Wang, PhD",
      role: "Data Science",
      bio: "Connie is excited about the possibilities of AI and machine learning to improve the patient experience. She has a PhD from the California Institute of Technology and a BS from Yale University. Prior to joining the Apprentice Health team, Connie worked on improving the pharmaceutical discovery process by implementing data collection processes to enable AI applications.",
      position: "left",
    },
    {
      imageSrc: "/assets/images/peter.jpg",
      name: "Peter Boekelheide",
      role: "Engineering",
      bio: "Peter has been working in the tech industry for nearly 20 years and is excited to help Apprentice Health bring healthcare the latest in cutting-edge technology. Prior to joining Apprentice, Peter was a lead engineer at companies in the intelligence analysis and fraud detection industries. He holds a BA in computer science from Oberlin College and lives in Boston with his fiancée, a radiologist at Massachusetts General Hospital.",
      position: "right",
    },
    // Add more cards as needed
  ];

  return (
    <div className="container mx-auto p-4">
      {cardsData.map((data, index) => (
        <Card
          key={index}
          imageSrc={data.imageSrc}
          name={data.name}
          role={data.role}
          bio={data.bio}
          position={data.position}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
