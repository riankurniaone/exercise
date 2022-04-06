// function Components named Gif, have 2 props: title and url
// use {} to declare props
// const Gif = ({ title, url }) => {
//     return (
//       <div className="gif">
//         <h3>{title}</h3>
//         <img src={url} alt={title} />
//       </div>
//     );
//   };
  

// const Gif = ({title, url}) => <img src={url} alt={title} />;
//   export default Gif;

export default function Gif({ title, url }) {
  return (
      <div className="card-gif">
          <img src={url} alt={title} />
          <p>{title}</p>
      </div>
  );
}