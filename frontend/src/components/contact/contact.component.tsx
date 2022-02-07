type ContactProps = {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
};

export const ContactComponent = ({ name }: ContactProps) => <h1>{name}</h1>;
