import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Cognitive Mesh',
    description: 'Distributed learning nodes for localized AI processing.',
    state: 'Live',
    why: 'Current centralized AI models suffer from latency and privacy concerns. I wanted to explore a peer-to-peer approach where knowledge is aggregated without raw data transmission.',
    systemLogic: 'Uses a custom gossip protocol to synchronize model weights across a mesh network. Nodes perform local training on edge devices and vote on weight updates using a consensus algorithm inspired by biological neural plasticity.',
    learned: 'Consensus in distributed systems is fragile. Balancing network overhead with model convergence speed required implementing a novel adaptive learning rate based on network latency metrics.'
  },
  {
    id: 'p2',
    title: 'Fluid Interface Kit',
    description: 'A React primitive library for physics-based micro-interactions.',
    state: 'Beta',
    why: 'Web interfaces often feel static and dead. I needed a system that treated UI elements as physical objects with mass and friction, but without the performance overhead of a full physics engine.',
    systemLogic: 'Built on top of requestAnimationFrame loops. It simulates spring dynamics using a Hooke’s Law approximation optimized for layout thrashing. It tracks velocity vectors of pointer events to transfer momentum to UI elements.',
    learned: 'The uncanny valley exists in motion design. Perfectly mathematical physics feel alien. I learned to introduce "intentional dampening" to make the system feel responsive to human intent rather than just gravity.'
  },
  {
    id: 'p3',
    title: 'Echo Analytics',
    description: 'Temporal data visualization for high-frequency trading streams.',
    state: 'Archived',
    why: 'Visualizing millisecond-level data changes in real-time usually crashes the browser DOM. I needed a way to render millions of points without dropping frames.',
    systemLogic: 'Leveraged WebGL instancing to render data points. Implemented a ring buffer data structure in a WebWorker to handle stream ingestion off the main thread, swapping pointers to update the render view.',
    learned: 'Data locality is king. The bottleneck wasn’t rendering, it was memory bandwidth. restructuring data arrays to align with GPU memory architecture improved performance by 400%.'
  },
  {
    id: 'p4',
    title: 'Synthetix Core',
    description: 'Procedural audio generation engine based on environmental noise.',
    state: 'Concept',
    why: 'Audio in digital environments is usually looped samples. I wanted an engine that synthesizes sound in real-time based on the virtual material properties of the UI.',
    systemLogic: 'Connects the Web Audio API oscillator nodes to a physics state machine. When a UI collision occurs, the impulse response is calculated and fed into a modal synthesis model.',
    learned: 'Browser audio scheduling is precise but resource-intensive. Managing voice allocation dynamically is crucial to prevent garbage collection pauses from causing audio glitches.'
  }
];

export const PHILOSOPHY_TEXT = `
I believe in software that feels inevitable.
Code is not just logic; it is the material we use to construct digital environments.
My work focuses on the intersection of systems engineering and sensory experience.
I don't just build features. I build systems that respond, adapt, and endure.
Precision is my primary metric. 
`;