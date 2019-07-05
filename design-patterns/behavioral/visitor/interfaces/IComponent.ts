import IVisitor from "./IVisitor";

export default interface IComponent {
  accept(visitor: IVisitor): void;
}
