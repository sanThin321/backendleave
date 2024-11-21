import bcrypt from 'bcrypt';

const plainPassword = 'pass';
const saltRounds = 10;

bcrypt.hash(plainPassword, saltRounds, (err, hashedPassword) => {
  if (err) {
    console.error('Error hashing password:', err);
    return;
  }
  console.log('Hashed Password:', hashedPassword);
});
