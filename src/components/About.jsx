const About = () => {
  return (
    <section id="about" className="flex justify-center pt-32">
      <div className="flex flex-col gap-4 items-center w-[75vw] lg:w-[60vw]">
        <h1 className="text-4xl lg:text-5xl font-medium mb-8">About Me</h1>
        <p className="text-lg lg:text-xl text-center text-gray-400">
          I’m a passionate and detail-oriented web developer with a strong
          foundation in the MERN stack (MongoDB, Express.js, React, and
          Node.js). I enjoy building full-stack applications that are clean,
          responsive, and user-focused.
          <br />
          <br />I got into tech because I’ve always enjoyed figuring things out
          and creating things from scratch. Over time, this interest grew into a
          real passion for building web applications and learning how everything
          works together.I love to continuously improve my skills by building
          and experimenting.
        </p>
      </div>
    </section>
  );
};

export default About;
