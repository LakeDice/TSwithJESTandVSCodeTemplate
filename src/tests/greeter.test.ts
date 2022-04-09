import { Greeter } from "../Greeter";
describe('Greeter', () => {
    it('Should output "Hello World"', () => {
      expect(Greeter.greet()).toBe('Hello World');
    })
  })