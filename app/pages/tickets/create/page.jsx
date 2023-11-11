// app/dashboard/tickets/create/page.jsx
import React, { Suspense } from 'react';
import CreateForm from './CreateForm';

export default function CreateTicketPage() {
  return (
    <main>
      <h2 className='text-primary text-center'>Add New Ticket</h2>
      <Suspense>
      <CreateForm />
      </Suspense>
    </main>
  );
}
