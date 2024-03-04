// Import SimpleOwnProject from your node_modules
import SimpleOwnProject from 'simpleownproject';

class Golyyy {
    constructor() {
        // Initialize SimpleOwnProject with an initial state
        this.store = new SimpleOwnProject({ message: 'Hello World' });
        
        // Subscribe to state changes to do something when the state updates
        this.store.subscribe(this.onStateChange.bind(this));
    }

    // Method to update the message state
    updateMessage(newMessage) {
        this.store.setState({ message: newMessage });
    }

    // Callback for when the state changes
    onStateChange(newState) {
        console.log('New state:', newState);
    }

    // Method to get the current state
    getCurrentState() {
        return this.store.getState();
    }
}

// Example Usage:
const golyyy = new Golyyy(); // Initializes with default message
golyyy.updateMessage('Golyyy is amazing!'); // Updates the message state

export default Golyyy;
