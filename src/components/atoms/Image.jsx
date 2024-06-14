
import backFace from '../../Imagenes/trasera.png';

function Image  ({ alt, onClick }){
  return (
    <img src={backFace} alt={alt} onClick={onClick} className="card-image" />
  );
};

export default Image;
