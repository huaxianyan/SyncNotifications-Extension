import { describe, expect, it } from 'vitest';
import { resolveSettingsPage } from './settings-navigation';

describe('Options navigation', () => {
  it('opens the requested settings page and falls back to connection and devices', () => {
    expect(resolveSettingsPage('#notifications')).toBe('notifications');
    expect(resolveSettingsPage('#about')).toBe('about');
    expect(resolveSettingsPage('#unknown')).toBe('connection-devices');
    expect(resolveSettingsPage('')).toBe('connection-devices');
  });
});
