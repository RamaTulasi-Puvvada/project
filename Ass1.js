import Profilebox from './Profilebox';
const profiles = [
  {
    id: 1,
    name: 'Tulasi',
    subtitle: '.2nd',
    description: 'This is a description for Tulasi.',
    connections: 20,
    profilePic: '/member.png',
    connectionPic: 'member.png',
  },
  {
    id: 2,
    name: 'Geetha',
    subtitle: '.3rd',
    description: 'This is a description for Geetha.',
    connections: 15,
    profilePic: '/member.png',
    connectionPic: '/member.png',
  },
  {
    id: 2,
    name: 'Afreen',
    subtitle: '.3rd',
    description: 'This is a description for Afreen.',
    connections: 15,
    profilePic: '/member.png',
    connectionPic: '/member.png',
  },
  {
    id: 2,
    name: 'Divya',
    subtitle: '.3rd',
    description: 'This is a description for Divya.',
    connections: 15,
    profilePic: '/member.png',
    connectionPic: '/member.png',
  },
  {
    id: 2,
    name: 'Sujana',
    subtitle: '.3rd',
    description: 'This is a description for Sujana.',
    connections: 15,
    profilePic: '/member.png',
    connectionPic: '/member.png',
  },
  {
    id: 2,
    name: 'Rishitha',
    subtitle: '.3rd',
    description: 'This is a description for Rishitha.',
    connections: 15,
    profilePic: '/member.png',
    connectionPic: '/member.png',
  },
  {
    id: 2,
    name: 'Anupama',
    subtitle: '.3rd',
    description: 'This is a description for Anupama.',
    connections: 15,
    profilePic: '/member.png',
    connectionPic: '/member.png',
  },
  {
    id: 2,
    name: 'Manasa',
    subtitle: '.3rd',
    description: 'This is a description for Manasa.',
    connections: 15,
    profilePic: '/member.png',
    connectionPic: '/member.png',
  },

];

function Ass1() {
  return (
    <div className="profile-grid">
      {profiles.map(profile => (
        <Profilebox key={profile.id} profile={profile} />
      ))}
    </div>
  );
}
export default Ass1;