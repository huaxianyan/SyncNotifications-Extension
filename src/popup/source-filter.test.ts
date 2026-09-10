import { describe, expect, it } from 'vitest';
import { filterBySource, sourceChoices } from './source-filter';

describe('Popup source filter', () => {
  it('filters only the current Popup view without changing the notification collection', () => {
    const notifications = [
      { sourceKey: 'phone-a', sourceName: 'Phone', notification: 'first' },
      { sourceKey: 'phone-a', sourceName: 'Phone', notification: 'second' },
      { sourceKey: 'phone-b', sourceName: 'Tablet', notification: 'third' },
    ];

    expect(sourceChoices(notifications)).toEqual([
      { key: 'phone-a', name: 'Phone' },
      { key: 'phone-b', name: 'Tablet' },
    ]);
    expect(filterBySource(notifications, 'phone-a').map((item) => item.notification))
      .toEqual(['first', 'second']);
    expect(notifications).toHaveLength(3);
  });
});
