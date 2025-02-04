
import { ComponentType } from 'react';

import { DataFromViewType, EViewType } from '@globalTypes/types';



interface DefaultDataProvider <T extends EViewType> {
  defaultData: () =>  DataFromViewType<T>;
}

interface RegistryEntry {

  component: ComponentType<any> & Partial<DefaultDataProvider<EViewType>>;

}

class ComponentRegistry {

  private registry: Record<EViewType, RegistryEntry> = {} as Record<EViewType, RegistryEntry>;

  register(viewType: EViewType, component: ComponentType<any> & Partial<DefaultDataProvider<EViewType>>) {
    this.registry[viewType] = { component };
  }

  get(viewType: EViewType): (ComponentType<any> & Partial<DefaultDataProvider<EViewType>>) {
    return this.registry[viewType]?.component;
  }

  getAll(): Record<EViewType, RegistryEntry> {
    return this.registry;
  }
}

export const componentRegistry = new ComponentRegistry();
