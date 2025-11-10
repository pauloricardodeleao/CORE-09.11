/*╔══════════════════════════════════════════════════════════════════════════╗
  ║  DON-PRL • Regenera Signature • © 2025 Don Paulo Ricardo de Leão        ║
  ║  File......: seed.ts                                                     ║
  ║  Purpose...: Database seeder com dados iniciais                          ║
  ║  License...: Proprietary • All rights reserved                           ║
  ╚══════════════════════════════════════════════════════════════════════════╝*/

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Clean existing data (optional - uncomment if needed)
  // await prisma.user.deleteMany();

  // Create demo users
  const hashedPassword = await bcrypt.hash('Regenera@2025', 12);
  
  const demoUser = await prisma.user.upsert({
    where: { email: 'demo@regenera.bank' },
    update: {},
    create: {
      email: 'demo@regenera.bank',
      password: hashedPassword,
      name: 'Don Paulo Ricardo',
      cpf: '12345678900',
      phone: '+5511999999999',
      balance: 50000.00,
      emailVerified: true,
      phoneVerified: true,
      xp: 1500,
      level: 5,
    },
  });

  console.log('✅ Demo user created:', demoUser.email);

  // Create badges
  const badges = await Promise.all([
    prisma.badge.upsert({
      where: { name: 'First Transaction' },
      update: {},
      create: {
        name: 'First Transaction',
        description: 'Realizou sua primeira transação',
        icon: '🎯',
        requirement: 'Make 1 transaction',
        xpReward: 100,
      },
    }),
    prisma.badge.upsert({
      where: { name: 'PIX Master' },
      update: {},
      create: {
        name: 'PIX Master',
        description: 'Realizou 10 transações PIX',
        icon: '⚡',
        requirement: 'Make 10 PIX transactions',
        xpReward: 250,
      },
    }),
    prisma.badge.upsert({
      where: { name: 'Crypto Trader' },
      update: {},
      create: {
        name: 'Crypto Trader',
        description: 'Realizou primeira compra de criptomoeda',
        icon: '₿',
        requirement: 'Buy cryptocurrency',
        xpReward: 200,
      },
    }),
    prisma.badge.upsert({
      where: { name: 'Green Warrior' },
      update: {},
      create: {
        name: 'Green Warrior',
        description: 'Comprou créditos de carbono',
        icon: '🌱',
        requirement: 'Purchase carbon credits',
        xpReward: 300,
      },
    }),
  ]);

  console.log('✅ Badges created:', badges.length);

  // Create quests
  const quests = await Promise.all([
    prisma.quest.upsert({
      where: { id: 'quest-1' },
      update: {},
      create: {
        id: 'quest-1',
        title: 'PIX Starter',
        description: 'Realize 5 transações PIX',
        requirement: { type: 'pix_count', target: 5 },
        xpReward: 150,
      },
    }),
    prisma.quest.upsert({
      where: { id: 'quest-2' },
      update: {},
      create: {
        id: 'quest-2',
        title: 'Investor',
        description: 'Invista R$ 1.000',
        requirement: { type: 'investment_amount', target: 1000 },
        xpReward: 300,
      },
    }),
    prisma.quest.upsert({
      where: { id: 'quest-3' },
      update: {},
      create: {
        id: 'quest-3',
        title: 'Crypto Explorer',
        description: 'Compre 3 criptomoedas diferentes',
        requirement: { type: 'crypto_diversity', target: 3 },
        xpReward: 400,
      },
    }),
  ]);

  console.log('✅ Quests created:', quests.length);

  console.log('🎉 Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

/*╔══════════════════════════════════════════════════════════════════════════╗
  ║                     DON-PRL • REGENERA SIGNATURE                          ║
  ║              © 2025 Don Paulo Ricardo de Leão                             ║
  ╚══════════════════════════════════════════════════════════════════════════╝*/
