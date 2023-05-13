import type { Story } from '@ladle/react';
import { Button } from '../button';

export const Default: Story = () => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <Button>Default</Button>
    <Button disabled>disabled</Button>
  </div>
);

export const Size: Story = () => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <Button size='xl'>Extra Large</Button>
    <Button size='lg'>Large</Button>
    <Button size='md'>Medium</Button>
    <Button size='sm'>Small</Button>
    <Button size='xs'>Extra Small</Button>
  </div>
);

export const Variant: Story = () => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <Button variant='clean'>clean</Button>
    <Button variant='link'>link</Button>
    <Button variant='outline'>outline</Button>
    <Button variant='simple'>simple</Button>
    <Button variant='solid'>solid</Button>
  </div>
);

export const Color: Story = () => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <Button color='clean'>Clean</Button>
    <Button color='danger'>danger</Button>
    <Button color='info'>info</Button>
    <Button color='primary'>primary</Button>
    <Button color='success'>success</Button>
    <Button color='warning'>warning</Button>
  </div>
);

export const Shadow: Story = () => (
  <>
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button
        shadow='inner'
        variant='outline'
      >
        inner
      </Button>
      <Button
        shadow='xs'
        variant='outline'
      >
        extra small
      </Button>
      <Button
        shadow='sm'
        variant='outline'
      >
        small
      </Button>
      <Button
        shadow='md'
        variant='outline'
      >
        medium
      </Button>
      <Button
        shadow='lg'
        variant='outline'
      >
        large
      </Button>
      <Button
        shadow='xl'
        variant='outline'
      >
        extra large
      </Button>
    </div>
    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
      <Button
        shadow='inner'
        variant='simple'
      >
        inner
      </Button>
      <Button
        shadow='xs'
        variant='solid'
      >
        extra small
      </Button>
      <Button
        shadow='sm'
        variant='clean'
      >
        small
      </Button>
      <Button
        shadow='md'
        variant='link'
      >
        medium
      </Button>
      <Button
        shadow='lg'
        color='info'
        size='lg'
      >
        large
      </Button>
      <Button
        shadow='xl'
        variant='outline'
        size='xl'
      >
        extra large
      </Button>
    </div>
  </>
);
