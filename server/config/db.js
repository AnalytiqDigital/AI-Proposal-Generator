// const mongoose = require('mongoose');

// const connectDB = async () => {
//   const uri = process.env.MONGO_URI || "mongodb+srv://bubmellz1born_db_user:9AWnAyYC69GvuRff@cluster0.7s6xrjz.mongodb.net/proposal-ai";
//   try {
//     // modern mongoose no longer needs/use these options
//     await mongoose.connect(uri);
//     console.log('MongoDB connected');
//   } catch (err) {
//     console.error('MongoDB connection error:', err);
//     // Exit the process if DB connection fails so callers can notice and restart
//     process.exit(1);
//   }
// };

// module.exports = connectDB;


const dns = require('dns');
const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error('❌ MongoDB Connection Failed: MONGO_URI is not set.');
    process.exit(1);
  }

  if (uri.startsWith('mongodb+srv://')) {
    const currentServers = dns.getServers();
    if (!currentServers.length || currentServers.some((server) => server === '127.0.0.1')) {
      dns.setServers(['8.8.8.8', '1.1.1.1']);
      console.log('🔧 Using fallback DNS servers for Atlas SRV lookup.');
    }
  }

  try {
    const conn = await mongoose.connect(uri);

    console.log('=================================');
    console.log('✅ MongoDB Atlas Connected');
    console.log(`📦 Database: ${conn.connection.name}`);
    console.log(`🌍 Host: ${conn.connection.host}`);
    console.log('=================================');
  } catch (err) {
    console.error('❌ MongoDB Connection Failed');
    console.error(err.message);
    if (err.message.includes('querySrv ECONNREFUSED')) {
      console.error('👉 This usually means your local DNS server refused the SRV lookup.');
      console.error('   Try using a working DNS server or switch to a direct MongoDB connection string.');
    }
    process.exit(1);
  }
};

module.exports = connectDB;
