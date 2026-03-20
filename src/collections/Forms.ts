import type { CollectionConfig } from 'payload'

export const Forms: CollectionConfig = {
  slug: 'forms',
  admin: {
    group: 'Forms',
    description: 'Create custom forms for signups, surveys, and contact.',
    useAsTitle: 'title',
    defaultColumns: ['title', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'fields',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'type',
          type: 'select',
          required: true,
          options: [
            { label: 'Text', value: 'text' },
            { label: 'Email', value: 'email' },
            { label: 'Textarea', value: 'textarea' },
            { label: 'Select', value: 'select' },
            { label: 'Checkbox', value: 'checkbox' },
            { label: 'Phone', value: 'phone' },
          ],
        },
        {
          name: 'required',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'options',
          type: 'array',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'value', type: 'text', required: true },
          ],
          admin: {
            condition: (data, siblingData) => siblingData?.type === 'select',
          },
        },
      ],
    },
    {
      name: 'submitButtonLabel',
      type: 'text',
      defaultValue: 'Submit',
    },
    {
      name: 'confirmationMessage',
      type: 'textarea',
      defaultValue: 'Thank you for your submission!',
    },
    {
      name: 'notificationEmails',
      type: 'array',
      fields: [
        { name: 'email', type: 'email', required: true },
      ],
    },
  ],
}

export const FormSubmissions: CollectionConfig = {
  slug: 'form-submissions',
  admin: {
    group: 'Forms',
    description: 'View responses submitted through your forms.',
    defaultColumns: ['form', 'submittedAt'],
  },
  fields: [
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
    },
    {
      name: 'submissionData',
      type: 'json',
      required: true,
    },
    {
      name: 'submittedAt',
      type: 'date',
      required: true,
      defaultValue: () => new Date().toISOString(),
      admin: {
        readOnly: true,
      },
    },
  ],
}
