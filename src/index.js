import './main.css';
import { makeHeader, makeLeftside } from './buildHTML';

const testFn = () => true;
makeHeader();
makeLeftside(testFn);
