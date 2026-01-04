# Agentic AI Healthcare Platform

A next-generation healthcare workflow automation platform leveraging Agentic AI to transform clinical referral processing through intelligent, autonomous systems.

## 🎯 Overview

The **Agentic AI Healthcare Platform** is designed to automate, track, monitor, and optimize clinical referral processing workflows. It leverages autonomous intelligent agents that can perceive their environment, make decisions, and take actions to achieve specific goals—revolutionizing healthcare workflow management through intelligent automation.

### Key Features

- **🤖 Autonomous Decision-Making**: AI agents independently analyze clinical data, prioritize tasks, and execute workflows without constant human intervention
- **🔗 Seamless Integration**: Leverages existing web application APIs, services, and databases to create a unified intelligent ecosystem
- **📊 Real-Time Monitoring**: Continuous tracking and evaluation of workflow execution, task completion, and system performance with adaptive optimization
- **🏥 Clinical Referral Processing**: Specialized automation for the complete referral lifecycle:
  - Automated referral triage and prioritization
  - Intelligent specialist matching based on expertise and availability
  - Real-time status tracking and notification management
  - Predictive analytics for bottleneck identification

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library
- **Wouter** - Lightweight routing
- **Recharts** - Data visualization

### Backend
- **Express.js** - Web server framework
- **Node.js** - Runtime environment
- **TypeScript** - Type-safe server code

### Development Tools
- **pnpm** - Fast, disk space efficient package manager
- **ESBuild** - Fast JavaScript bundler
- **Prettier** - Code formatting
- **TypeScript** - Type checking

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ 
- **pnpm** 10+ (install via `npm install -g pnpm`)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ayc66168/agentic-healthcare.git
   cd agentic-healthcare
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

   The application will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   pnpm build
   ```

5. **Start production server**
   ```bash
   pnpm start
   ```

## 📁 Project Structure

```
agentic-ai-healthcare/
├── client/                 # Frontend application
│   ├── public/            # Static assets
│   │   └── images/        # Image resources
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── ui/       # UI component library
│   │   │   ├── ErrorBoundary.tsx
│   │   │   ├── ManusDialog.tsx
│   │   │   └── Map.tsx
│   │   ├── contexts/      # React contexts
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   ├── pages/         # Page components
│   │   ├── App.tsx        # Main app component
│   │   └── main.tsx       # Application entry point
│   └── index.html
├── server/                # Backend server
│   └── index.ts          # Express server setup
├── shared/                # Shared code between client/server
│   └── const.ts
├── patches/               # Package patches
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 📜 Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production (client + server)
- `pnpm start` - Start production server
- `pnpm preview` - Preview production build
- `pnpm check` - Type check without emitting files
- `pnpm format` - Format code with Prettier

## 🎨 Design Philosophy

This project follows the **Organic Intelligence Gradient Flow** design philosophy:

- **Fluid, Organic Shapes**: Mirroring biological systems and neural networks
- **Gradient-Heavy Aesthetic**: Representing continuous data transformation
- **Soft, Approachable Forms**: Contrasting with precise technical information
- **Nature-Inspired Patterns**: Suggesting growth, adaptation, and evolution

### Color Palette

- **Deep Teal** (#0D4C4A) - Trust and medical professionalism
- **Soft Sage** (#7FA99B) - Calming healthcare environment
- **Vibrant Coral** (#FF7F6A) - Primary action color, warm and human-centered
- **Accent Purple** (#9B72CF) - AI "thinking" processes

### Typography

- **Display**: Outfit Bold (64-80px) - Hero statements
- **Headings**: Plus Jakarta Sans SemiBold (28-42px) - Section titles
- **Body**: Inter Regular (17-19px) - Main content
- **Technical**: Fira Code - Code blocks and API references

## 🏗️ Architecture

The platform is built on a modern full-stack architecture:

- **Client-Side Rendering**: React-based SPA with client-side routing
- **Component-Based Architecture**: Modular, reusable UI components
- **API Integration**: Designed to integrate with existing healthcare APIs and services
- **Real-Time Capabilities**: Built for real-time monitoring and updates
- **Responsive Design**: Mobile-first approach with breakpoints for all devices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

**Built with ❤️ for the future of healthcare automation**
