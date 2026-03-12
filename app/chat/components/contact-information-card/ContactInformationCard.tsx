import { useLoaderData, useNavigation, useParams } from "react-router";
import type { Client } from "~/chat/interfaces/chat-interface";
import { ContactInformation } from "./ContactInformation";
import { ContactInformationSkeleton } from "./ContactInformationSkeleton";
import { NoContactSelected } from "./NoContactSelected";

interface Props {
  client?: Client;
}

export const ContactInformationCard = (/*{ client }: Props*/) => {
  const { id } = useParams();
  const { clients = [], client } = useLoaderData();
  const { state } = useNavigation();

  const isPending = state === "loading";

  if (client) return <ContactInformation client={client} />;

  if (isPending) return <ContactInformationSkeleton />;

  if (!id) return <NoContactSelected />;

  // const client = clients.find((client: Client) => client.id === id);
  if (!client) return <NoContactSelected />;

  return <ContactInformation client={client} />;
};
