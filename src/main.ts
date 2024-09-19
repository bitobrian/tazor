import { Component } from './components/Counter.tazor'; // Ensure this matches the correct path

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('app');
    if (container) {
        const counterComponent = new Component(container); // Instantiate and initialize
        counterComponent.initialize();
    } else {
        console.error('Container element not found');
    }
});
