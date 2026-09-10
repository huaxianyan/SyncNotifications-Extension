export interface SourceFilteredNotification {
  sourceKey: string;
  sourceName: string;
}

export function sourceChoices(
  notifications: SourceFilteredNotification[],
): Array<{ key: string; name: string }> {
  const sources = new Map<string, string>();
  for (const notification of notifications) sources.set(notification.sourceKey, notification.sourceName);
  return Array.from(sources, ([key, name]) => ({ key, name }));
}

export function filterBySource<T extends SourceFilteredNotification>(
  notifications: T[],
  sourceKey: string,
): T[] {
  return sourceKey === 'all'
    ? notifications
    : notifications.filter((notification) => notification.sourceKey === sourceKey);
}
