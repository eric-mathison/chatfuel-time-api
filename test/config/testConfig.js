import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

const should = chai.should();

global.chai = chai;
global.should = should;
global.expect = expect;

chai.use(chaiHttp);
