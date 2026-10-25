'use client';

import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [activeAdminTab, setActiveAdminTab] = useState<'profile' | 'projects' | 'tech' | 'facts' | 'certs'>('profile');
  
  const [expandedProjects, setExpandedProjects] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    fetch('/api/content')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    window.location.href = '/admin/login';
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage('');
    const res = await fetch('/api/content', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    setSaving(false);
    if (result.success) {
      setMessage('All changes saved successfully!');
    } else {
      setMessage('Failed to update content.');
    }
  };

  if (loading) return <div className="p-10 text-[#4A3E3D] font-mono bg-[#FDF0ED] min-h-screen">Loading Control Center...</div>;

  return (
    <main className="min-h-screen bg-[#FDF0ED] text-[#4A3E3D] font-mono p-6 sm:p-10">
      {/* Top Navbar */}
      <div className="border-4 border-[#4A3E3D] bg-[#FFF8F6] p-4 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-[6px_6px_0px_0px_#D8A7B1]">
        <div>
          <h1 className="text-xl font-extrabold">MASTER PORTAL CONTROL CENTER</h1>
          <p className="text-xs text-[#88706B]">Manage all public portfolio content from here</p>
        </div>
        <div className="flex gap-3">
          <a
            href="/"
            target="_blank"
            className="px-4 py-2 bg-[#E2F0CB] text-[#4A3E3D] text-xs font-bold border-2 border-[#4A3E3D] shadow-[3px_3px_0px_0px_#4A3E3D]"
          >
            VIEW SITE
          </a>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-[#FFB7B2] text-[#4A3E3D] text-xs font-bold border-2 border-[#4A3E3D] shadow-[3px_3px_0px_0px_#4A3E3D]"
          >
            LOGOUT
          </button>
        </div>
      </div>

      {/* Sub-Navigation Tabs & Save Button */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 bg-[#FFF8F6] p-4 border-4 border-[#4A3E3D] shadow-[6px_6px_0px_0px_#D8A7B1]">
        <div className="flex flex-wrap gap-2">
          {(['profile', 'projects', 'tech', 'facts', 'certs'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveAdminTab(tab)}
              className={`px-3 py-1.5 text-xs font-bold border-2 uppercase transition-all ${
                activeAdminTab === tab
                  ? 'bg-[#FFB7B2] text-[#4A3E3D] border-[#4A3E3D] shadow-[2px_2px_0px_0px_#4A3E3D]'
                  : 'bg-white border-[#4A3E3D] text-[#88706B] hover:bg-[#FFE5E2]'
              }`}
            >
              {tab === 'certs' ? 'Certs & Workshops' : tab}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {message && <span className="text-xs text-green-700 font-bold">{message}</span>}
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-6 py-2 bg-[#B5EAD7] text-[#4A3E3D] font-extrabold text-xs border-2 border-[#4A3E3D] shadow-[4px_4px_0px_0px_#4A3E3D] hover:translate-y-0.5"
          >
            {saving ? 'SAVING...' : 'SAVE ALL CHANGES'}
          </button>
        </div>
      </div>

      {/* TAB 1: PROFILE EDITING */}
      {/* TAB 1: PROFILE & SOCIALS EDITING */}
      {activeAdminTab === 'profile' && (
        <div className="space-y-6">
          <div className="border-4 border-[#4A3E3D] bg-[#FFF8F6] p-6 shadow-[6px_6px_0px_0px_#D8A7B1] space-y-4">
            <h2 className="text-lg font-bold border-b-2 border-dashed border-[#D8A7B1] pb-2">Edit Profile Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block mb-1 font-bold">Name</label>
                <input
                  type="text"
                  value={data.profile.name}
                  onChange={(e) => setData({ ...data, profile: { ...data.profile, name: e.target.value } })}
                  className="w-full p-2 bg-white border-2 border-[#4A3E3D] text-[#4A3E3D]"
                />
              </div>
              <div>
                <label className="block mb-1 font-bold">Role Title</label>
                <input
                  type="text"
                  value={data.profile.roleTitle}
                  onChange={(e) => setData({ ...data, profile: { ...data.profile, roleTitle: e.target.value } })}
                  className="w-full p-2 bg-white border-2 border-[#4A3E3D] text-[#4A3E3D]"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-1 font-bold">Tagline Subheader</label>
                <input
                  type="text"
                  value={data.profile.tagline}
                  onChange={(e) => setData({ ...data, profile: { ...data.profile, tagline: e.target.value } })}
                  className="w-full p-2 bg-white border-2 border-[#4A3E3D] text-[#4A3E3D]"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-1 font-bold">About Bio Text</label>
                <textarea
                  rows={4}
                  value={data.profile.aboutText}
                  onChange={(e) => setData({ ...data, profile: { ...data.profile, aboutText: e.target.value } })}
                  className="w-full p-2 bg-white border-2 border-[#4A3E3D] text-[#4A3E3D]"
                />
              </div>
            </div>
          </div>

          {/* Manage Social Links Section */}
          <div className="border-4 border-[#4A3E3D] bg-[#FFF8F6] p-6 shadow-[6px_6px_0px_0px_#D8A7B1] space-y-4">
            <h2 className="text-lg font-bold border-b-2 border-dashed border-[#D8A7B1] pb-2">Manage Social Links</h2>
            <div className="space-y-3">
              {data.socials?.map((social: any, index: number) => (
                <div key={index} className="grid grid-cols-1 sm:grid-cols-4 gap-3 p-3 bg-white border-2 border-[#4A3E3D] text-xs items-center">
                  <div>
                    <label className="block text-[10px] font-bold mb-1">Platform Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Laracasts"
                      value={social.name || ''}
                      onChange={(e) => {
                        const updated = [...data.socials];
                        updated[index].name = e.target.value;
                        setData({ ...data, socials: updated });
                      }}
                      className="w-full p-2 border border-[#4A3E3D] font-bold bg-white text-[#4A3E3D]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold mb-1">Profile URL</label>
                    <input
                      type="url"
                      placeholder="https://..."
                      value={social.url || ''}
                      onChange={(e) => {
                        const updated = [...data.socials];
                        updated[index].url = e.target.value;
                        setData({ ...data, socials: updated });
                      }}
                      className="w-full p-2 border border-[#4A3E3D] bg-white text-[#4A3E3D]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold mb-1">Icon Path / URL</label>
                    <input
                      type="text"
                      placeholder="icon.svg or https://..."
                      value={social.icon || ''}
                      onChange={(e) => {
                        const updated = [...data.socials];
                        updated[index].icon = e.target.value;
                        setData({ ...data, socials: updated });
                      }}
                      className="w-full p-2 border border-[#4A3E3D] bg-white text-[#4A3E3D]"
                    />
                  </div>

                  <div className="flex justify-end sm:pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        const updated = data.socials.filter((_: any, i: number) => i !== index);
                        setData({ ...data, socials: updated });
                      }}
                      className="px-3 py-1.5 bg-[#FFB7B2] text-[#4A3E3D] border-2 border-[#4A3E3D] font-bold hover:opacity-90"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                const newSocial = { 
                  name: 'New Platform', 
                  url: 'https://', 
                  icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/github.svg' 
                };
                setData({ ...data, socials: [...(data.socials || []), newSocial] });
              }}
              className="px-4 py-2 bg-[#B5EAD7] text-[#4A3E3D] text-xs font-bold border-2 border-[#4A3E3D] shadow-[3px_3px_0px_0px_#4A3E3D] hover:translate-y-0.5"
            >
              + Add Social Link
            </button>
          </div>
        </div>
      )}

      {/* TAB 2: PROJECTS EDITING */}
      {/* TAB 2: PROJECTS EDITING */}
      {activeAdminTab === 'projects' && (
        <div className="space-y-6">
          {/* Add New Project Button Moved to the Top */}
          <button
            type="button"
            onClick={() => {
              const newProj = {
                id: 'proj-' + Date.now(),
                projName: 'NEW',
                title: 'New Project Title',
                desc: 'Short description here...',
                longDesc: 'Detailed description for modal view...',
                projYear: '2026',
                btnBg: 'bg-[#FFB7B2]',
                cardBg: 'bg-[#E2F0CB]',
                tech: ['Laravel', 'PHP'],
                features: ['Feature 1', 'Feature 2'],
                image: '',
                liveUrl: '',
                githubUrl: '',
              };
              // unshift adds the new project to the very beginning of the array so its form appears at the top
              setData({ ...data, projects: [newProj, ...data.projects] });
              // Automatically expand the newly added project card
              setExpandedProjects((prev) => ({ ...prev, [newProj.id]: true }));
            }}
            className="w-full py-3 border-4 border-dashed border-[#4A3E3D] bg-[#FFF8F6] text-[#4A3E3D] font-bold text-xs hover:bg-[#FFE5E2]"
          >
            + Add New Project
          </button>

          {/* Existing Projects List */}
          {data.projects.map((proj: any, index: number) => {
            const isExpanded = expandedProjects[proj.id] ?? false;

            return (
              <div key={proj.id} className="border-4 border-[#4A3E3D] bg-[#FFF8F6] shadow-[6px_6px_0px_0px_#D8A7B1]">
                <div className="p-4 bg-[#FFDAC1] border-b-2 border-[#4A3E3D] flex justify-between items-center gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedProjects((prev) => ({
                        ...prev,
                        [proj.id]: !isExpanded,
                      }))
                    }
                    className="flex items-center gap-2 text-xs font-extrabold text-[#4A3E3D] hover:opacity-75 transition-opacity text-left flex-1"
                  >
                    <span>{isExpanded ? '▼' : '►'}</span>
                    <span>
                      PROJECT #{index + 1} ({proj.projName || 'UNNAMED'}) — {proj.title}
                    </span>
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedProjects((prev) => ({
                          ...prev,
                          [proj.id]: !isExpanded,
                        }))
                      }
                      className="px-2 py-1 bg-white text-[#4A3E3D] text-[10px] border-2 border-[#4A3E3D] font-bold"
                    >
                      {isExpanded ? 'Collapse' : 'Expand'}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const updated = data.projects.filter((_: any, i: number) => i !== index);
                        setData({ ...data, projects: updated });
                      }}
                      className="px-3 py-1 bg-[#FFB7B2] text-[#4A3E3D] text-xs border-2 border-[#4A3E3D] font-bold"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {/* Collapsible Card Body */}
                {isExpanded && (
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      
                      {/* Image Upload Input Field */}
                      <div className="sm:col-span-2 space-y-2">
                        <label className="block font-bold">
                          Project Preview Image (File Upload — Prioritized over Code Name Text Box)
                        </label>
                        <div className="flex items-center gap-4">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={async (e) => {
                              const file = e.target.files?.[0];
                              if (!file) return;

                              const formData = new FormData();
                              formData.append('file', file);

                              try {
                                const res = await fetch('/api/upload', {
                                  method: 'POST',
                                  body: formData,
                                });
                                const result = await res.json();

                                if (result.success) {
                                  const updated = [...data.projects];
                                  updated[index].image = result.url;
                                  setData({ ...data, projects: updated });
                                } else {
                                  alert('Image upload failed: ' + result.error);
                                }
                              } catch (err) {
                                console.error('Upload error:', err);
                                alert('Error uploading file');
                              }
                            }}
                            className="text-xs text-[#88706B] file:mr-3 file:py-1.5 file:px-3 file:border-2 file:border-[#4A3E3D] file:bg-[#E2F0CB] file:text-[#4A3E3D] file:text-xs file:font-bold hover:file:opacity-90 cursor-pointer"
                          />
                          {proj.image && (
                            <button
                              type="button"
                              onClick={() => {
                                const updated = [...data.projects];
                                updated[index].image = '';
                                setData({ ...data, projects: updated });
                              }}
                              className="px-2 py-1 text-[10px] bg-[#FFB7B2] text-[#4A3E3D] border-2 border-[#4A3E3D] font-bold"
                            >
                              Remove Photo
                            </button>
                          )}
                        </div>
                        {proj.image ? (
                          <div className="mt-2 relative h-32 w-56 border-2 border-[#4A3E3D] overflow-hidden rounded bg-white">
                            <img src={proj.image} alt="Preview" className="w-full h-full object-cover" />
                          </div>
                        ) : (
                          <p className="text-[10px] text-[#88706B] italic">
                            No image uploaded. The project code name (&quot;{proj.projName || 'CKLMS'}&quot;) will be shown as default.
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block mb-1 font-bold">Project Code Name</label>
                        <input
                          type="text"
                          value={proj.projName}
                          onChange={(e) => {
                            const updated = [...data.projects];
                            updated[index].projName = e.target.value;
                            setData({ ...data, projects: updated });
                          }}
                          className="w-full p-2 bg-white border-2 border-[#4A3E3D] text-[#4A3E3D]"
                        />
                      </div>

                      <div>
                        <label className="block mb-1 font-bold">Project Full Title</label>
                        <input
                          type="text"
                          value={proj.title}
                          onChange={(e) => {
                            const updated = [...data.projects];
                            updated[index].title = e.target.value;
                            setData({ ...data, projects: updated });
                          }}
                          className="w-full p-2 bg-white border-2 border-[#4A3E3D] text-[#4A3E3D]"
                        />
                      </div>

                      <div>
                        <label className="block mb-1 font-bold">Project Year Range (e.g., 2021-2023)</label>
                        <input
                          type="text"
                          value={proj.projYear || ''}
                          onChange={(e) => {
                            const updated = [...data.projects];
                            updated[index].projYear = e.target.value;
                            setData({ ...data, projects: updated });
                          }}
                          className="w-full p-2 bg-white border-2 border-[#4A3E3D] text-[#4A3E3D]"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block mb-1 font-bold">Short Card Description</label>
                        <input
                          type="text"
                          value={proj.desc}
                          onChange={(e) => {
                            const updated = [...data.projects];
                            updated[index].desc = e.target.value;
                            setData({ ...data, projects: updated });
                          }}
                          className="w-full p-2 bg-white border-2 border-[#4A3E3D] text-[#4A3E3D]"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block mb-1 font-bold">Long Description (Inside Modal Window)</label>
                        <textarea
                          rows={3}
                          value={proj.longDesc || ''}
                          onChange={(e) => {
                            const updated = [...data.projects];
                            updated[index].longDesc = e.target.value;
                            setData({ ...data, projects: updated });
                          }}
                          className="w-full p-2 bg-white border-2 border-[#4A3E3D] text-[#4A3E3D]"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block mb-1 font-bold">Tech Stack (One item per line)</label>
                        <textarea
                            rows={3}
                            placeholder="Laravel&#10;PHP&#10;MySQL&#10;Filament"
                            value={proj.tech ? proj.tech.join('\n') : ''}
                            onChange={(e) => {
                            const updated = [...data.projects];
                            updated[index].tech = e.target.value.split('\n').map((s: string) => s.trim()).filter(Boolean);
                            setData({ ...data, projects: updated });
                            }}
                            className="w-full p-2 bg-white border-2 border-[#4A3E3D] text-[#4A3E3D]"
                        />
                        </div>

                      <div className="sm:col-span-2">
                        <label className="block mb-1 font-bold">Key Features (One sentence/feature per line)</label>
                        <textarea
                            rows={4}
                            placeholder="Admin-managed homepage&#10;Projects gallery&#10;Contact inbox with replies"
                            value={proj.features ? proj.features.join('\n') : ''}
                            onChange={(e) => {
                            const updated = [...data.projects];
                            updated[index].features = e.target.value.split('\n').map((s: string) => s.trim()).filter(Boolean);
                            setData({ ...data, projects: updated });
                            }}
                            className="w-full p-2 bg-white border-2 border-[#4A3E3D] text-[#4A3E3D]"
                        />
                        </div>

                      <div>
                        <label className="block mb-1 font-bold">Live Demo URL (Optional)</label>
                        <input
                          type="url"
                          placeholder="https://your-demo-site.com"
                          value={proj.liveUrl || ''}
                          onChange={(e) => {
                            const updated = [...data.projects];
                            updated[index].liveUrl = e.target.value;
                            setData({ ...data, projects: updated });
                          }}
                          className="w-full p-2 bg-white border-2 border-[#4A3E3D] text-[#4A3E3D] placeholder-gray-400"
                        />
                      </div>

                      <div>
                        <label className="block mb-1 font-bold">GitHub Repository URL (Optional)</label>
                        <input
                          type="url"
                          placeholder="https://github.com/username/repo"
                          value={proj.githubUrl || ''}
                          onChange={(e) => {
                            const updated = [...data.projects];
                            updated[index].githubUrl = e.target.value;
                            setData({ ...data, projects: updated });
                          }}
                          className="w-full p-2 bg-white border-2 border-[#4A3E3D] text-[#4A3E3D] placeholder-gray-400"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* TAB 3: TECH STACK EDITING */}
      {activeAdminTab === 'tech' && (
        <div className="border-4 border-[#4A3E3D] bg-[#FFF8F6] p-6 shadow-[6px_6px_0px_0px_#D8A7B1] space-y-4">
          <h2 className="text-lg font-bold border-b-2 border-dashed border-[#D8A7B1] pb-2">Manage Tech Stack Items</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {data.techStack.map((tech: any, index: number) => (
              <div key={index} className="p-3 bg-white border-2 border-[#4A3E3D] flex justify-between items-center text-xs">
                <span>{tech.label}</span>
                <button
                  onClick={() => {
                    const updated = data.techStack.filter((_: any, i: number) => i !== index);
                    setData({ ...data, techStack: updated });
                  }}
                  className="text-red-600 hover:text-red-800 font-bold"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={() => {
              const label = prompt('Enter tech stack name:');
              if (label) {
                setData({
                  ...data,
                  techStack: [...data.techStack, { label, logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/javascript.svg' }],
                });
              }
            }}
            className="mt-4 px-4 py-2 bg-[#B5EAD7] text-[#4A3E3D] text-xs font-bold border-2 border-[#4A3E3D]"
          >
            + Add Tech Stack Item
          </button>
        </div>
      )}

      {/* TAB 4: FUN FACTS EDITING */}
      {activeAdminTab === 'facts' && (
        <div className="border-4 border-[#4A3E3D] bg-[#FFF8F6] p-6 shadow-[6px_6px_0px_0px_#D8A7B1] space-y-4">
          <h2 className="text-lg font-bold border-b-2 border-dashed border-[#D8A7B1] pb-2">Manage Fun Facts</h2>
          {data.funFacts.map((fact: any, index: number) => (
            <div key={index} className="space-y-2 p-4 bg-white border-2 border-[#4A3E3D] text-xs">
              <input
                type="text"
                value={fact.title}
                onChange={(e) => {
                  const updated = [...data.funFacts];
                  updated[index].title = e.target.value;
                  setData({ ...data, funFacts: updated });
                }}
                className="w-full p-2 bg-white border border-[#4A3E3D] text-[#4A3E3D] font-bold"
              />
              <textarea
                rows={2}
                value={fact.desc}
                onChange={(e) => {
                  const updated = [...data.funFacts];
                  updated[index].desc = e.target.value;
                  setData({ ...data, funFacts: updated });
                }}
                className="w-full p-2 bg-white border border-[#4A3E3D] text-[#4A3E3D]"
              />
            </div>
          ))}
        </div>
      )}

      {/* TAB 5: CERTS & WORKSHOPS EDITING */}
      {/* TAB 5: CERTS & WORKSHOPS EDITING */}
{activeAdminTab === 'certs' && (
  <div className="space-y-6">
    {/* CERTIFICATIONS */}
<div className="border-4 border-[#4A3E3D] bg-[#FFF8F6] p-6 shadow-[6px_6px_0px_0px_#D8A7B1] space-y-4">
  <h2 className="text-lg font-bold border-b-2 border-dashed border-[#D8A7B1] pb-2">Manage Certifications</h2>
  {data.certifications?.map((cert: any, index: number) => (
    <div key={index} className="space-y-2 p-4 bg-white border-2 border-[#4A3E3D] text-xs">
      <div className="flex justify-between items-center">
        <span className="font-bold">Certification #{index + 1}</span>
        <button
          type="button"
          onClick={() => {
            const updated = data.certifications.filter((_: any, i: number) => i !== index);
            setData({ ...data, certifications: updated });
          }}
          className="text-red-600 font-bold"
        >
          Delete
        </button>
      </div>
      <div>
        <label className="block mb-1 font-bold">Badges (comma-separated)</label>
        <input
          type="text"
          placeholder="e.g. Cisco Networking, Course Completion"
          value={cert.badges ? cert.badges.join(', ') : ''}
          onChange={(e) => {
            const updated = [...data.certifications];
            updated[index].badges = e.target.value.split(',').map((s: string) => s.trim()).filter(Boolean);
            setData({ ...data, certifications: updated });
          }}
          className="w-full p-2 bg-white border border-[#4A3E3D]"
        />
      </div>
      <div>
        <label className="block mb-1 font-bold">Certification Title</label>
        <input
          type="text"
          value={cert.title || ''}
          onChange={(e) => {
            const updated = [...data.certifications];
            updated[index].title = e.target.value;
            setData({ ...data, certifications: updated });
          }}
          className="w-full p-2 bg-white border border-[#4A3E3D] font-bold"
        />
      </div>
      <div>
        <label className="block mb-1 font-bold">Description & Details</label>
        <textarea
          rows={2}
          value={cert.desc || ''}
          onChange={(e) => {
            const updated = [...data.certifications];
            updated[index].desc = e.target.value;
            setData({ ...data, certifications: updated });
          }}
          className="w-full p-2 bg-white border border-[#4A3E3D]"
        />
      </div>
    </div>
  ))}
  <button
    type="button"
    onClick={() => {
      const newCert = {
        badges: ['Certification'],
        title: 'New Certification Title',
        desc: 'Description and issuing body...',
      };
      setData({ ...data, certifications: [...(data.certifications || []), newCert] });
    }}
    className="px-4 py-2 bg-[#B5EAD7] text-[#4A3E3D] text-xs font-bold border-2 border-[#4A3E3D]"
  >
    + Add Certification
  </button>
</div>

{/* WORKSHOPS */}
<div className="border-4 border-[#4A3E3D] bg-[#FFF8F6] p-6 shadow-[6px_6px_0px_0px_#D8A7B1] space-y-4">
  <h2 className="text-lg font-bold border-b-2 border-dashed border-[#D8A7B1] pb-2">Manage Workshops & Seminars</h2>
  {data.workshops?.map((ws: any, index: number) => (
    <div key={index} className="space-y-2 p-4 bg-white border-2 border-[#4A3E3D] text-xs">
      <div className="flex justify-between items-center">
        <span className="font-bold">Workshop #{index + 1}</span>
        <button
          type="button"
          onClick={() => {
            const updated = data.workshops.filter((_: any, i: number) => i !== index);
            setData({ ...data, workshops: updated });
          }}
          className="text-red-600 font-bold"
        >
          Delete
        </button>
      </div>
      <div>
        <label className="block mb-1 font-bold">Tags (comma-separated, e.g., QA, FRONTEND)</label>
        <input
          type="text"
          placeholder="e.g. QA, FRONTEND"
          value={ws.tags ? ws.tags.join(', ') : ''}
          onChange={(e) => {
            const updated = [...data.workshops];
            updated[index].tags = e.target.value.split(',').map((s: string) => s.trim()).filter(Boolean);
            setData({ ...data, workshops: updated });
          }}
          className="w-full p-2 bg-white border border-[#4A3E3D]"
        />
      </div>
      <div>
        <label className="block mb-1 font-bold">Workshop Title</label>
        <input
          type="text"
          value={ws.title || ''}
          onChange={(e) => {
            const updated = [...data.workshops];
            updated[index].title = e.target.value;
            setData({ ...data, workshops: updated });
          }}
          className="w-full p-2 bg-white border border-[#4A3E3D] font-bold"
        />
      </div>
      <div>
        <label className="block mb-1 font-bold">Organization / Provider</label>
        <input
          type="text"
          value={ws.org || ''}
          onChange={(e) => {
            const updated = [...data.workshops];
            updated[index].org = e.target.value;
            setData({ ...data, workshops: updated });
          }}
          className="w-full p-2 bg-white border border-[#4A3E3D]"
        />
      </div>
      <div>
        <label className="block mb-1 font-bold">Description</label>
        <textarea
          rows={2}
          value={ws.desc || ''}
          onChange={(e) => {
            const updated = [...data.workshops];
            updated[index].desc = e.target.value;
            setData({ ...data, workshops: updated });
          }}
          className="w-full p-2 bg-white border border-[#4A3E3D]"
        />
      </div>
    </div>
  ))}
  <button
    type="button"
    onClick={() => {
      const newWs = {
        tags: ['WORKSHOP'],
        title: 'New Workshop Title',
        org: 'Organization',
        desc: 'Description...',
      };
      setData({ ...data, workshops: [...(data.workshops || []), newWs] });
    }}
    className="px-4 py-2 bg-[#B5EAD7] text-[#4A3E3D] text-xs font-bold border-2 border-[#4A3E3D]"
  >
    + Add Workshop
  </button>
</div>
  </div>
)}
    </main>
  );
}