import React, { useEffect } from "react";
import "./TextSphere.scss";

// Importing TagCloud package
import TagCloud from "TagCloud";

const TextShpere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    const container = '.tagcloud';
    const texts = [
      'HTML',
      'CSS',
      'C#',
      'JavaScript',
      'React',
      'Python',
      'Flask',
      'NodeJS',
      'Unity',
      'MongoDB',
      'NoSQL',
      'GIT',
      'GITHUB',
      'RDBMS',
      'VR Development',
      'Object Oriented',
      'Gradle',
      'REST API'
    ];

    const options = {
      radius: 500 ,
      maxSpeed: 'fast',
      initSpeed: 'fast',
      keep: false,
    };

    TagCloud(container, texts, options);
  }, []);

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TextShpere;