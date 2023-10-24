import { pageLinks } from '../../../Data/Data';

const PageLinks = ({ parentClass, itemClass,click }) => {
  const styleLinks = {
    right: 0,
    position: "absolute",
    top: "64px",
    background: "aliceblue",
    width: "100%",
    height: "auto",
  }
// console.log(click);
  return (
    <ul className={parentClass} style={click ? styleLinks : null}>
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={itemClass}>
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default PageLinks;