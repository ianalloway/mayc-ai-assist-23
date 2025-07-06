
import React, { useState } from 'react';
import { Folder, Share, Users, Lock, Plus, Move } from 'lucide-react';
import { cn } from '@/lib/utils';

type NFTCategory = {
  id: string;
  name: string;
  icon: React.ReactNode;
  items: NFTCollection[];
};

type NFTCollection = {
  id: string;
  name: string;
};

interface MAYCSidebarProps {
  onCortexSelect: (categoryId: string, itemId: string | null) => void;
  selectedCategoryId: string;
  selectedItemId: string | null;
}

const CortexSidebar = ({ 
  onCortexSelect, 
  selectedCategoryId = 'private', 
  selectedItemId = 'overview' 
}: MAYCSidebarProps) => {
  const categories: NFTCategory[] = [
    {
      id: 'shared',
      name: 'Shared',
      icon: <Share size={16} className="text-blue-500" />,
      items: [
        { id: 'shared-1', name: 'Alpha Collection' },
        { id: 'shared-2', name: 'Mega Mutants' },
        { id: 'shared-3', name: 'AI Specialists' },
      ]
    },
    {
      id: 'team',
      name: 'Team Collections',
      icon: <Users size={16} className="text-green-500" />,
      items: [
        { id: 'team-1', name: 'Strategy Mutants' },
        { id: 'team-2', name: 'Creative Apes' },
        { id: 'team-3', name: 'Tech Squad' },
      ]
    },
    {
      id: 'private',
      name: 'Private',
      icon: <Lock size={16} className="text-amber-500" />,
      items: [
        { id: 'overview', name: 'Overview' },
        { id: 'private-1', name: 'Toxic Mutants' },
        { id: 'private-2', name: 'Radioactive Apes' },
        { id: 'private-3', name: 'Prismatic Collection' },
      ]
    }
  ];

  const handleCategoryClick = (categoryId: string) => {
    onCortexSelect(categoryId, null);
  };

  const handleItemClick = (categoryId: string, itemId: string) => {
    onCortexSelect(categoryId, itemId);
  };

  return (
    <div className="w-60 border-r border-border/50 overflow-y-auto shrink-0">
      {categories.map((category) => (
        <div key={category.id} className="mb-6">
          <div 
            className={cn(
              "flex items-center justify-between px-4 py-2 text-sm font-medium cursor-pointer",
              selectedCategoryId === category.id && !selectedItemId ? "text-primary" : "text-foreground/80"
            )}
            onClick={() => handleCategoryClick(category.id)}
          >
            <div className="flex items-center gap-2">
              {category.icon}
              <span>{category.name}</span>
            </div>
            <button className="p-1 rounded-full hover:bg-muted">
              <Plus size={14} />
            </button>
          </div>
          
          <div className="mt-1">
            {category.items.map((item) => (
              <div 
                key={item.id}
                className={cn(
                  "flex items-center px-6 py-2 text-sm cursor-pointer",
                  selectedCategoryId === category.id && selectedItemId === item.id
                    ? "bg-primary/10 text-primary" 
                    : "hover:bg-muted/50 text-foreground/80"
                )}
                onClick={() => handleItemClick(category.id, item.id)}
              >
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CortexSidebar;
