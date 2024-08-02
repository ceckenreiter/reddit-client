import {render, screen, cleanup} from '@testing-library/react'
import App from '../App/App';



beforeEach(() => {
  render( <App />)
})
afterEach(() => {
  cleanup()
}); 


describe('App Link Testing', () => {
  test('Home Link Renders', () => {
    
      const home = screen.getByText('HOME')
      expect(home).not.toBe(undefined)
  });
  test('My Profile Link Renders', () => {
    
    const profile = screen.getByText('My Profile')
    expect(profile).not.toBe(undefined) 
  }); 
  test('Report Bug Link Renders', () => {
   
    const report = screen.getByText('Report Bug')
    expect(report).not.toBe(undefined)
  });
}); 

describe('Posts Testing', () => {
  test('Loads Posts', () => {
      const container = document.getElementById('posts')
      expect(container).not.toBe('null')
   
  });
})




