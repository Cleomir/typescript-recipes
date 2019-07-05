import CareTaker from "./CareTaker";
import Originator from "./Originator";

const originator = new Originator("some state");
const careTaker = new CareTaker(originator);

careTaker.backup();
originator.operation();

careTaker.backup();
originator.operation();

careTaker.backup();
careTaker.showHistory();

careTaker.undo();
careTaker.undo();
