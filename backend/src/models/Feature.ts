feature-voting-system
├── backend
│   ├── src
│   │   ├── controllers
│   │   │   ├── authController.ts
│   │   │   ├── featureController.ts
│   │   │   └── voteController.ts
│   │   ├── models
│   │   │   ├── Feature.ts
│   │   │   ├── User.ts
│   │   │   └── Vote.ts
│   │   ├── routes
│   │   │   ├── authRoutes.ts
│   │   │   ├── featureRoutes.ts
│   │   │   └── voteRoutes.ts
│   │   ├── config
│   │   │   └── database.ts
│   │   ├── middleware
│   │   │   └── auth.ts
│   │   └── app.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── mobile
│   ├── src
│   │   ├── screens
│   │   │   ├── HomeScreen.tsx
│   │   │   ├── FeatureScreen.tsx
│   │   │   ├── LoginScreen.tsx
│   │   │   └── ProfileScreen.tsx
│   │   ├── components
│   │   │   ├── FeatureCard.tsx
│   │   │   └── VoteButton.tsx
│   │   ├── services
│   │   │   ├── api.ts
│   │   │   └── auth.ts
│   │   ├── navigation
│   │   │   └── AppNavigator.tsx
│   │   └── App.tsx
│   ├── package.json
│   └── README.md
└── README.md