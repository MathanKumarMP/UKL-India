import React from 'react';
import '../styles/OrganizationStructure.css';

const OrganizationStructure = () => {
  return (
    <section className="org-section">
      {/* Background Graphic Accents */}
      <div className="org-bg-gradient"></div>
      <div className="org-bg-grid"></div>

      <div className="org-content">
        <h2 className="org-heading">Organization Structure</h2>

        {/* Overlapping White Chart Box */}
        <div className="org-card">
          <div className="org-tree-wrapper">
            
            {/* Level 1: Managing Director */}
            <div className="tree-level level-root">
              <div className="org-node root-node">
                Managing Director
              </div>
            </div>

            {/* Vertical connector line from Root */}
            <div className="root-stem-line"></div>

            {/* Horizontal connector line linking 5 Manager columns */}
            <div className="managers-bar-wrapper">
              <div className="managers-horizontal-line"></div>
            </div>

            {/* Level 2 & 3: 5 Manager Columns */}
            <div className="tree-columns-grid">
              
              {/* Column 1: QA Manager */}
              <div className="tree-column">
                <div className="column-top-stem"></div>
                <div className="org-node">QA Manager</div>
                <div className="column-v-line"></div>
                <div className="org-node">QA Engineers</div>
              </div>

              {/* Column 2: Design Manager */}
              <div className="tree-column">
                <div className="column-top-stem"></div>
                <div className="org-node">Design Manager</div>
                <div className="column-v-line"></div>
                <div className="org-node">Design Engineers</div>
              </div>

              {/* Column 3: Factory Manager (Center - Branches to Sub-supervisors) */}
              <div className="tree-column center-column">
                <div className="column-top-stem"></div>
                <div className="org-node">Factory Manager</div>
                <div className="factory-down-stem"></div>

                {/* Sub-branch horizontal line for Winding & Fabrication */}
                <div className="sub-horizontal-line"></div>

                <div className="sub-columns-row">
                  {/* Winding Sub-branch */}
                  <div className="sub-column">
                    <div className="sub-top-stem"></div>
                    <div className="org-node sub-node">Winding Supervisor</div>
                    <div className="column-v-line"></div>
                    <div className="org-node sub-node">Winding Operator</div>
                  </div>

                  {/* Fabrication Sub-branch */}
                  <div className="sub-column">
                    <div className="sub-top-stem"></div>
                    <div className="org-node sub-node">
                      Fabrication & Testing<br />Supervisor
                    </div>
                    <div className="column-v-line"></div>
                    <div className="org-node sub-node">
                      Fabrication & Testing<br />Operator
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 4: Purchase Manager */}
              <div className="tree-column">
                <div className="column-top-stem"></div>
                <div className="org-node">Purchase Manager</div>
                <div className="column-v-line"></div>
                <div className="org-node">Store Supervisor</div>
              </div>

              {/* Column 5: Marketing Manager */}
              <div className="tree-column">
                <div className="column-top-stem"></div>
                <div className="org-node">Marketing Manager</div>
                <div className="column-v-line"></div>
                <div className="org-node">Sales Engineers</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationStructure;
