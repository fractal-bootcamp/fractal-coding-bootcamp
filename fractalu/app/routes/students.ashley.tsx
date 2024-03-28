const Ashley = () => {
  const textClass = isColored ? 'text-blue-500 font-serif' : 'text-black font-sans';

  return <div className="flex min-h-full flex-col justify-center text-5xl">Ashley</div>;
};

const variable = 32;

module.exports = {
  //...
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#a991f7",
          "secondary": "#f6d860",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
}

export default Ashley;
